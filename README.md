# Dough Calculator

A web-based bread dough ingredient and yeast calculator.
Note: The current calculator has been developed with the use of LLMs. It has to be checked for accuracy, but seems to match real-life experience.

## Features

- **Two input modes**: Grams or baker's percentages
- **Ingredient calculator**: Flour, water (hydration %), salt, sugar, and fat
- **Fermentation parameters**: Bulk fermentation time/temperature and cold proofing time/temperature
- **Yeast calculation**: Fresh and dry yeast requirements based on fermentation conditions
- **Yeast multiplier**: Adjust yeast (0.5x - 2.0x) for faster/slower fermentation
- **Calculation breakdown**: Detailed view of all computed values

## Usage

1. Open `index.html` in any modern web browser
2. Enter your recipe (flour weight, hydration, optional ingredients)
3. Set fermentation schedule (bulk and cold times/temps)
4. Adjust yeast multiplier as needed
5. View results: total weight, hydration %, and required yeast amounts

## How It Works

The calculator computes required yeast based on a fermentation model that factors in:

- **Temperature** (Q10 model)
- **Hydration**
- **Salt** (fermentation retarder)
- **Sugar** (fermentation accelerator)
- **Fat**
- **Fermentation time**

**Formula:**
```
Yeast % = Reference Yeast × (Reference Time / Fermentation Time) × (1 / Activity)

Activity = Temp Factor × Hydration Factor × Salt Factor × Sugar Factor × Fat Factor
```

## References

The yeast calculation model is based on established fermentation science:

1. **Q10 Temperature Model**: The Q10 (temperature coefficient) is a fundamental principle in biochemistry originating from van 't Hoff's work (late 19th century). It measures how reaction rates change with temperature—most biological processes approximately double in rate for every 10°C increase.
   - Wikipedia [Q10 (temperature coefficient)](https://en.wikipedia.org/wiki/Q10_(temperature_coefficient))
   - Raccach, M., et al. (2004). [Natural fermentation of wheat flours](https://www.sciencedirect.com/science/article/abs/pii/S095671350300046X). *Food Control*, 15(6), pp. 455-461.

2. **Calibration Parameters**:
   - Base yeast: 0.30% of flour (instant yeast, 24°C, 12h bulk fermentation)
   - Reference hydration: 65%, salt: 2%
   - These parameters are adjusted based on temperature, time, and ingredient effects

## ToDo

- [x] Calculator for required amount of yeast
- [ ] Move some parts to settings (measurement type, enabling cold proofing, enabling fat, enabling sugar yeast multiplier) - consider a pane, a collapsible, a dialog
- [ ] UI should be more coherent
- [ ] Store variables in localstorage
- [ ] Add setting for fermentation time steps (30 mins or hour)
- [ ] Make the calculation part more robust & clear, in parts with separate functions
- [ ] Add yeast types (fresh, active dry, instant, sourdough)
- [ ] Add setting for Fahrenheit vs Celcius
- [ ] Add preferments (poolish, biga, pâte fermentée) - with recipes?
- [ ] Add flour strength / protein / ash content etc? Possibly store flour types
- [ ] Add optional factors for pH, starting temperatures (flour, water, etc), altitude, desired dough temperature
- [ ] Add fermentation stage
- [ ] Option for saving multiple named recipes
- [ ] Export saved recipe(s) to file?
- [ ] Add visual elements for showing appropriate values (hydration, salt, etc)
- [ ] Consider altering parameters via url
- [ ] Add a reversed calculator - Give a target baking time
- [ ] Add more detailed explanation on temperatures, additives & add comments on useful other additives / bread improvers (citric acid, etc). Include descriptions about what to expect
- [ ] Add an option for the number of loafs / dough balls
- [ ] Add known recipes / styles (neapolitan pizza, pan pizza, basic bread, etc)
- [ ] Add information on baking different types of bread / pizza etc?