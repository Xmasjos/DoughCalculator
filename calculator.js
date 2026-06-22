/**
 * Calculate required instant yeast percentage and weight.
 *
 * All percentages are baker's percentages
 * (relative to flour weight).
 */

function calculateYeast({
    flourWeight,      // g
    hydration,        // %
    salt,             // %
    sugar,            // %
    fat,              // %
    temperature,      // °C
    fermentationTime, // hours

    // Calibration constants
    referenceYeast = 0.30,     // %
    referenceTemp = 24,        // °C
    referenceTime = 12,        // hours
    referenceHydration = 65,   // %
    referenceSalt = 2          // %
}) {

    // -----------------------------------
    // Temperature factor (Q10 model)
    // -----------------------------------
    const temperatureFactor =
        Math.pow(2, (temperature - referenceTemp) / 10);

    // -----------------------------------
    // Hydration factor
    // -----------------------------------
    const hydrationFactor =
        1 + 0.005 * (hydration - referenceHydration);

    // -----------------------------------
    // Salt factor
    // -----------------------------------
    const saltFactor =
        Math.max(
            0.5,
            1 - 0.08 * (salt - referenceSalt)
        );

    // -----------------------------------
    // Sugar factor
    // -----------------------------------
    let sugarFactor;

    if (sugar <= 10) {
        sugarFactor = 1 + 0.03 * sugar;
    } else {
        // Osmotic stress beyond 10%
        sugarFactor =
            (1 + 0.03 * 10) *
            Math.exp(-(sugar - 10) * 0.03);
    }

    // -----------------------------------
    // Fat factor
    // -----------------------------------
    const fatFactor =
        Math.max(
            0.5,
            1 - 0.015 * fat
        );

    // -----------------------------------
    // Combined fermentation activity
    // -----------------------------------
    const activity =
        temperatureFactor *
        hydrationFactor *
        saltFactor *
        sugarFactor *
        fatFactor;

    // -----------------------------------
    // Time adjustment
    // -----------------------------------
    const timeFactor =
        referenceTime / fermentationTime;

    // -----------------------------------
    // Required yeast %
    // -----------------------------------
    const yeastPercent =
        referenceYeast *
        timeFactor *
        (1 / activity);

    // -----------------------------------
    // Convert to grams
    // -----------------------------------
    const yeastWeight =
        flourWeight *
        yeastPercent / 100;

    return {
        yeastPercent,
        yeastWeight,

        debug: {
            temperatureFactor,
            hydrationFactor,
            saltFactor,
            sugarFactor,
            fatFactor,
            activity
        }
    };
}