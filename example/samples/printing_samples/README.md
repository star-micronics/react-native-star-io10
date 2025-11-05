# Printing Samples
Samples are available to create print layouts for each type of business. Please select a sample that closely resembles the layout you would like to print in your application and edit the sample code to make use of it.

- [Label Samples](#label-samples)
  - [Samples for 203dpi and 300dpi dual-use](#samples-for-203dpi-and-300dpi-dual-use)
  - [Samples for 203dpi](#samples-for-203dpi)
  - [Samples for 300dpi](#samples-for-300dpi)
- [Receipt Samples](#receipt-samples)
- [Graphic Samples for iOS/Android](#graphic-samples-for-iosandroid)

> :warning: Some printer models may not be able to print some samples. Please confirm the APIs available for that model and adjust the layout accordingly when using this samples.

## Label Samples
There are some samples of generating labels using the template printing function.

Please combine LabelSampleXX_ForYYYdpi_SampleName_Template.tsx as template and LabelSampleXX_ForYYYdpi_SampleName_FieldData.json as field data.

### Samples for 203dpi and 300dpi dual-use
For samples \#1 - \#2 and \#8 - \#18, we also provide source code that does not use the template printing function.

| \# | Sample Name | Printing Result Image | Printable Area       |
|----|-------------|-----------------------|----------------------|
| 1 | Tamper Proof Label<br>[Template](LabelSamples/For203dpiAnd300dpi/LabelSample01_For203dpiAnd300dpi_TamperProofLabel_Template.tsx) / [Field Data](LabelSamples/For203dpiAnd300dpi/LabelSample01_For203dpiAnd300dpi_TamperProofLabel_FieldData.json) | <img src="LabelSamples/For203dpiAnd300dpi/images/LabelSample01_For203dpiAnd300dpi_TamperProofLabel.png" width="258px"> | 72mm(203dpi) / 48.7mm(300dpi)<sup>[1](#note1)</sup> |
| 2 | Drink Label1<br>[Template](LabelSamples/For203dpiAnd300dpi/LabelSample02_For203dpiAnd300dpi_DrinkLabel1_Template.tsx) / [Field Data](LabelSamples/For203dpiAnd300dpi/LabelSample02_For203dpiAnd300dpi_DrinkLabel1_FieldData.json)  | <img src="LabelSamples/For203dpiAnd300dpi/images/LabelSample02_For203dpiAnd300dpi_DrinkLabel1.png" width="192px"> | 48mm(203dpi) / 48.7mm(300dpi)<sup>[1](#note1)</sup> |
| 3 | Drink Label2<br>[Template](LabelSamples/For203dpiAnd300dpi/LabelSample03_For203dpiAnd300dpi_DrinkLabel2_Template.tsx) / [Field Data](LabelSamples/For203dpiAnd300dpi/LabelSample03_For203dpiAnd300dpi_DrinkLabel2_FieldData.json)  | <img src="LabelSamples/For203dpiAnd300dpi/images/LabelSample03_For203dpiAnd300dpi_DrinkLabel2.png" width="192px"> | 48mm(203dpi) / 48.7mm(300dpi)<sup>[1](#note1)</sup> |
| 4 | Drink Label3<br>[Template](LabelSamples/For203dpiAnd300dpi/LabelSample04_For203dpiAnd300dpi_DrinkLabel3_Template.tsx) / [Field Data](LabelSamples/For203dpiAnd300dpi/LabelSample04_For203dpiAnd300dpi_DrinkLabel3_FieldData.json) | <img src="LabelSamples/For203dpiAnd300dpi/images/LabelSample04_For203dpiAnd300dpi_DrinkLabel3.png" width="258px"> | 72mm(203dpi) / 48.7mm(300dpi)<sup>[1](#note1)</sup> |
| 5 | Drink Label4<br>[Template](LabelSamples/For203dpiAnd300dpi/LabelSample06_For203dpiAnd300dpi_DrinkLabel5_Template.tsx) / [Field Data](LabelSamples/For203dpiAnd300dpi/LabelSample05_For203dpiAnd300dpi_DrinkLabel4_FieldData.json) | <img src="LabelSamples/For203dpiAnd300dpi/images/LabelSample05_For203dpiAnd300dpi_DrinkLabel4.png" width="258px"> | 72mm(203dpi) / 48.7mm(300dpi)<sup>[1](#note1)</sup> |
| 6 | Drink Label5<br>[Template](LabelSamples/For203dpiAnd300dpi/LabelSample06_For203dpiAnd300dpi_DrinkLabel5_Template.tsx) / [Field Data](LabelSamples/For203dpiAnd300dpi/LabelSample06_For203dpiAnd300dpi_DrinkLabel5_FieldData.json) | <img src="LabelSamples/For203dpiAnd300dpi/images/LabelSample06_For203dpiAnd300dpi_DrinkLabel5.png" width="192px"> | 48mm(203dpi) / 48.7mm(300dpi)<sup>[1](#note1)</sup> |
| 7 | Drink Label6<br>[Template](LabelSamples/For203dpiAnd300dpi/LabelSample07_For203dpiAnd300dpi_DrinkLabel6_Template.tsx) / [Field Data](LabelSamples/For203dpiAnd300dpi/LabelSample07_For203dpiAnd300dpi_DrinkLabel6_FieldData.json) | <img src="LabelSamples/For203dpiAnd300dpi/images/LabelSample07_For203dpiAnd300dpi_DrinkLabel6.png" width="192px"> | 48mm(203dpi) / 48.7mm(300dpi)<sup>[1](#note1)</sup> |
| 8 | Nutrition Facts Label<br>[Template](LabelSamples/For203dpiAnd300dpi/LabelSample08_For203dpiAnd300dpi_NutritionFactsLabel.tsx) / [Field Data](LabelSamples/For203dpiAnd300dpi/LabelSample08_For203dpiAnd300dpi_NutritionFactsLabel_FieldData.json) | <img src="LabelSamples/For203dpiAnd300dpi/images/LabelSample08_For203dpiAnd300dpi_NutritionFactsLabel.png" width="258px"> | 72mm(203dpi) / 48.7mm(300dpi)<sup>[1](#note1)</sup> |
| 9 | Food Prep Label<br>[Template](LabelSamples/For203dpiAnd300dpi/LabelSample09_For203dpiAnd300dpi_FoodPrepLabel.tsx) / [Field Data](LabelSamples/For203dpiAnd300dpi/LabelSample09_For203dpiAnd300dpi_FoodPrepLabel_FieldData.json) | <img src="LabelSamples/For203dpiAnd300dpi/images/LabelSample09_For203dpiAnd300dpi_FoodPrepLabel.png" width="192px"> | 48mm(203dpi) / 48.7mm(300dpi)<sup>[1](#note1)</sup> |
| 10 | Food Delivery<br>[Template](LabelSamples/For203dpiAnd300dpi/LabelSample10_For203dpiAnd300dpi_FoodDeliveryLabel_Template.tsx) / [Field Data](LabelSamples/For203dpiAnd300dpi/LabelSample10_For203dpiAnd300dpi_FoodDeliveryLabel_FieldData.json) | <img src="LabelSamples/For203dpiAnd300dpi/images/LabelSample10_For203dpiAnd300dpi_FoodDeliveryLabel.png" width="258px"> | 72mm(203dpi) / 48.7mm(300dpi)<sup>[1](#note1)</sup> |
| 11 | Shipping Address Label<br>[Template](LabelSamples/For203dpiAnd300dpi/LabelSample11_For203dpiAnd300dpi_ShippingAddressLabel_Template.tsx) / [Field Data](LabelSamples/For203dpiAnd300dpi/LabelSample11_For203dpiAnd300dpi_ShippingAddressLabel_FieldData.json) | <img src="LabelSamples/For203dpiAnd300dpi/images/LabelSample11_For203dpiAnd300dpi_ShippingAddressLabel.png" width="258px"> | 72mm(203dpi) / 48.7mm(300dpi)<sup>[1](#note1)</sup> |
| 12 | Inventory Label<br>[Template](LabelSamples/For203dpiAnd300dpi/LabelSample12_For203dpiAnd300dpi_InventoryLabel_Template.tsx) / [Field Data](LabelSamples/For203dpiAnd300dpi/LabelSample12_For203dpiAnd300dpi_InventoryLabel_FieldData.json) | <img src="LabelSamples/For203dpiAnd300dpi/images/LabelSample12_For203dpiAnd300dpi_InventoryLabel.png" width="258px"> | 72mm(203dpi) / 48.7mm(300dpi)<sup>[1](#note1)</sup> |
| 13 | Food Product Label<br>[Template](LabelSamples/For203dpiAnd300dpi/LabelSample13_For203dpiAnd300dpi_FoodProductLabel_Template.tsx) / [Field Data](LabelSamples/For203dpiAnd300dpi/LabelSample13_For203dpiAnd300dpi_FoodProductLabel_FieldData.json) | <img src="LabelSamples/For203dpiAnd300dpi/images/LabelSample13_For203dpiAnd300dpi_FoodProductLabel.png" width="258px"> | 72mm(203dpi) / 48.7mm(300dpi)<sup>[1](#note1)</sup> |
| 14 | Expiration Label(JP)<br>[Template](LabelSamples/For203dpiAnd300dpi/LabelSample14_For203dpiAnd300dpi_ExpirationLabelJP_Template.tsx) / [Field Data](LabelSamples/For203dpiAnd300dpi/LabelSample14_For203dpiAnd300dpi_ExpirationLabelJP_FieldData.json) | <img src="LabelSamples/For203dpiAnd300dpi/images/LabelSample14_For203dpiAnd300dpi_ExpirationLabelJP.png" width="192px"> | 48mm(203dpi) / 34mm(300dpi)<sup>[1](#note1)</sup> |
| 15 | Food Delivery Label(Thai)<br>[Template](LabelSamples/For203dpiAnd300dpi/LabelSample15_For203dpiAnd300dpi_FoodDeliveryLabelThai_Template.tsx) / [Field Data](LabelSamples/For203dpiAnd300dpi/LabelSample15_For203dpiAnd300dpi_FoodDeliveryLabelThai_FieldData.json) | <img src="LabelSamples/For203dpiAnd300dpi/images/LabelSample15_For203dpiAnd300dpi_FoodDeliveryLabelThai.png" width="192px"> | 48mm(203dpi) / 48.7mm(300dpi)<sup>[1](#note1)</sup> |
| 16 | Shelf Label for Inventory<br>[Template](LabelSamples/For203dpiAnd300dpi/LabelSample16_For203dpiAnd300dpi_ShelfLabelForInventory_Template.tsx) / [Field Data](LabelSamples/For203dpiAnd300dpi/LabelSample16_For203dpiAnd300dpi_ShelfLabelForInventory_FieldData.json) | <img src="LabelSamples/For203dpiAnd300dpi/images/LabelSample16_For203dpiAnd300dpi_ShelfLabelForInventory.png" width="192px"> | 48mm(203dpi/300dpi) |
| 17 | Pharmacy Medication2<br>[Template](LabelSamples/For203dpiAnd300dpi/LabelSample17_For203dpiAnd300dpi_PharmacyMedication2_Template.tsx) / [Field Data](LabelSamples/For203dpiAnd300dpi/LabelSample17_For203dpiAnd300dpi_PharmacyMedication2_FieldData.json) | <img src="LabelSamples/For203dpiAnd300dpi/images/LabelSample17_For203dpiAnd300dpi_PharmacyMedication2.png" width="258px"> | 72mm(203dpi) / 48.7mm(300dpi)<sup>[1](#note1)</sup> |
| 18 | Barcode Label2<br>[Wide Template](LabelSamples/For203dpiAnd300dpi/LabelSample18_For203dpiAnd300dpi_BarcodeLabel2_Wide_Template.tsx) / [Narrow Template](LabelSamples/For203dpiAnd300dpi/LabelSample18_For203dpiAnd300dpi_BarcodeLabel2_Narrow_Template.tsx) / [Field Data](LabelSamples/For203dpiAnd300dpi/LabelSample18_For203dpiAnd300dpi_BarcodeLabel2_FieldData.json) | <img src="LabelSamples/For203dpiAnd300dpi/images/LabelSample18_For203dpiAnd300dpi_BarcodeLabel2_Wide.png" width="258px"> | Wide: 72mm(203dpi) / 48.7mm(300dpi)<sup>[1](#note1)</sup><br>Narrow: 48mm(203dpi) / 34mm(300dpi)<sup>[1](#note1)</sup>  |
| 19 | Prescription Label<br>[Template](LabelSamples/For203dpiAnd300dpi/LabelSample19_For203dpiAnd300dpi_PrescriptionLabel_Template.tsx) / [Field Data](LabelSamples/For203dpiAnd300dpi/LabelSample19_For203dpiAnd300dpi_PrescriptionLabel_FieldData.json) | <img src="LabelSamples/For203dpiAnd300dpi/images/LabelSample19_For203dpiAnd300dpi_PrescriptionLabel.png" width="192px"> | 72mm(203dpi) / 48.7mm(300dpi)<sup>[1](#note1)</sup> |
| 20 | Visitor Label<br>[Template](LabelSamples/For203dpiAnd300dpi/LabelSample20_For203dpiAnd300dpi_VisitorLabel_Template.tsx) / [Field Data](LabelSamples/For203dpiAnd300dpi/LabelSample20_For203dpiAnd300dpi_VisitorLabel_FieldData.json) | <img src="LabelSamples/For203dpiAnd300dpi/images/LabelSample20_For203dpiAnd300dpi_VisitorLabel.png" width="192px"> | 48mm(203dpi/300dpi) |
| 21 | Product Label<br>[Template](LabelSamples/For203dpiAnd300dpi/LabelSample21_For203dpiAnd300dpi_ProductLabel_Template.tsx) / [Field Data](LabelSamples/For203dpiAnd300dpi/LabelSample21_For203dpiAnd300dpi_ProductLabel_FieldData.json) | <img src="LabelSamples/For203dpiAnd300dpi/images/LabelSample21_For203dpiAnd300dpi_ProductLabel.png" width="192px"> | 48mm(203dpi/300dpi) |

<div id="note1">*1: Follow the comments in the template to set the printable area for 300dpi.</div>

### Samples for 203dpi
By adjusting the print position and border size etc., it can be diverted to 300dpi printers.

For samples #1 and #2, we also provide source code that does not use the template printing function.

| \# | Sample Name | Printing Result Image | Printable Area       |
|----|-------------|-----------------------|----------------------|
| 1 | Japanese Food Label(Lunch Box)<br>[Template](LabelSamples/For203dpi/LabelSample01_For203dpi_JapaneseFoodLabelLunchBox_Template.tsx) / [Field Data](LabelSamples/For203dpi/LabelSample01_For203dpi_JapaneseFoodLabelLunchBox_FieldData.json) | <img src="LabelSamples/For203dpi/images/LabelSample01_For203dpi_JapaneseFoodLabelLunchBox.png" width="192px"> | 48mm |
| 2 | Japanese Food Label(Cake)<br>[Template](LabelSamples/For203dpi/LabelSample02_For203dpi_JapaneseFoodLabelCake_Template.tsx) / [Field Data](LabelSamples/For203dpi/LabelSample02_For203dpi_JapaneseFoodLabelCake_FieldData.json) | <img src="LabelSamples/For203dpi/images/LabelSample02_For203dpi_JapaneseFoodLabelCake.png" width="192px"> | 48mm |
| 3 | Pharmacy Medication1<br>[Template](LabelSamples/For203dpi/LabelSample03_For203dpi_PharmacyMedication1_Template.tsx) / [Field Data](LabelSamples/For203dpi/LabelSample03_For203dpi_PharmacyMedication1_FieldData.json) | <img src="LabelSamples/For203dpi/images/LabelSample03_For203dpi_PharmacyMedication1.png" width="258px"> | 72mm |
| 4 | Shipping Label1<br>[Template](LabelSamples/For203dpi/LabelSample04_For203dpi_ShippingLabel1_Template.tsx) / [Field Data](LabelSamples/For203dpi/LabelSample04_For203dpi_ShippingLabel1_FieldData.json) | <img src="LabelSamples/For203dpi/images/LabelSample04_For203dpi_ShippingLabel1.png" width="258px"> | 72mm |
| 5 | Shipping Label2<br>[Template](LabelSamples/For203dpi/LabelSample05_For203dpi_ShippingLabel2_Template.tsx) / [Field Data](LabelSamples/For203dpi/LabelSample05_For203dpi_ShippingLabel2_FieldData.json) | <img src="LabelSamples/For203dpi/images/LabelSample05_For203dpi_ShippingLabel2.png" width="258px"> | 72mm |
| 6 | Barcode Label1<br>[Template](LabelSamples/For203dpi/LabelSample06_For203dpi_BarcodeLabel1_Template.tsx) / [Field Data](LabelSamples/For203dpi/LabelSample06_For203dpi_BarcodeLabel1_FieldData.json) | <img src="LabelSamples/For203dpi/images/LabelSample06_For203dpi_BarcodeLabel1.png" width="258px"> | 72mm |
| 7 | Order Label<br>[Template](LabelSamples/For203dpi/LabelSample07_For203dpi_OrderLabel_Template.tsx) / [Field Data](LabelSamples/For203dpi/LabelSample07_For203dpi_OrderLabel_FieldData.json) | <img src="LabelSamples/For203dpi/images/LabelSample07_For203dpi_OrderLabel.png" width="258px"> | 72mm |
| 8 | Allergen Warning<br>[Template](LabelSamples/For203dpi/LabelSample08_For203dpi_AllergenWarning_Template.tsx) / [Field Data](LabelSamples/For203dpi/LabelSample08_For203dpi_AllergenWarning_FieldData.json) | <img src="LabelSamples/For203dpi/images/LabelSample08_For203dpi_AllergenWarning.png" width="258px"> | 72mm |
| 9 | Cleaned And Sanitised<br>[Template](LabelSamples/For203dpi/LabelSample09_For203dpi_CleanedAndSanitised_Template.tsx) / [Field Data](LabelSamples/For203dpi/LabelSample09_For203dpi_CleanedAndSanitised_FieldData.json) | <img src="LabelSamples/For203dpi/images/LabelSample09_For203dpi_CleanedAndSanitised.png" width="258px"> | 72mm |
| 10 | Coffee Order<br>[Template](LabelSamples/For203dpi/LabelSample10_For203dpi_CoffeeOrder_Template.tsx) / [Field Data](LabelSamples/For203dpi/LabelSample10_For203dpi_CoffeeOrder_FieldData.json) | <img src="LabelSamples/For203dpi/images/LabelSample10_For203dpi_CoffeeOrder.png" width="258px"> | 72mm |
| 11 | Expiration Date<br>[Template](LabelSamples/For203dpi/LabelSample11_For203dpi_ExpirationDate_Template.tsx) / [Field Data](LabelSamples/For203dpi/LabelSample11_For203dpi_ExpirationDate_FieldData.json) | <img src="LabelSamples/For203dpi/images/LabelSample11_For203dpi_ExpirationDate.png" width="258px"> | 72mm |
| 12 | FoodSafety Info<br>[Template](LabelSamples/For203dpi/LabelSample12_For203dpi_FoodSafetyInfo_Template.tsx) / [Field Data](LabelSamples/For203dpi/LabelSample12_For203dpi_FoodSafetyInfo_FieldData.json) | <img src="LabelSamples/For203dpi/images/LabelSample12_For203dpi_FoodSafetyInfo.png" width="258px"> | 72mm |
| 13 | Sale 50% Off<br>[Template](LabelSamples/For203dpi/LabelSample13_For203dpi_Sale50PercentOff_Template.tsx) / [Field Data](LabelSamples/For203dpi/LabelSample13_For203dpi_Sale50PercentOff_FieldData.json) | <img src="LabelSamples/For203dpi/images/LabelSample13_For203dpi_Sale50PercentOff.png" width="258px"> | 72mm |
| 14 | Barbell Label<br>[Template](LabelSamples/For203dpi/LabelSample14_For203dpi_BarbellLabel_Template.tsx) / [Field Data](LabelSamples/For203dpi/LabelSample14_For203dpi_BarbellLabel_FieldData.json) | <img src="LabelSamples/For203dpi/images/LabelSample14_For203dpi_BarbellLabel.png" width="258px"> | 54mm |

### Samples for 300dpi
By adjusting the print position and border size etc., it can be diverted to 203dpi printers.

| \# | Sample Name | Printing Result Image | Printable Area       |
|----|-------------|-----------------------|----------------------|
| 1 | Japanese Food Label(Lunch Box)<br>[Template](LabelSamples/For300dpi/LabelSample01_For300dpi_JapaneseFoodLabelLunchBox_Template.tsx) / [Field Data](LabelSamples/For300dpi/LabelSample01_For300dpi_JapaneseFoodLabelLunchBox_FieldData.json) | <img src="LabelSamples/For300dpi/images/LabelSample01_For300dpi_JapaneseFoodLabelLunchBox.png" width="192px"> | 48.7mm |
| 2 | Japanese Food Label(Cake)<br>[Template](LabelSamples/For300dpi/LabelSample02_For300dpi_JapaneseFoodLabelCake_Template.tsx) / [Field Data](LabelSamples/For300dpi/LabelSample02_For300dpi_JapaneseFoodLabelCake_FieldData.json) | <img src="LabelSamples/For300dpi/images/LabelSample02_For300dpi_JapaneseFoodLabelCake.png" width="192px"> | 48.7mm |
| 3 | Barcode Label1<br>[Template](LabelSamples/For300dpi/LabelSample03_For300dpi_BarcodeLabel1_Template.tsx) / [Field Data](LabelSamples/For300dpi/LabelSample03_For300dpi_BarcodeLabel1_FieldData.json) | <img src="LabelSamples/For300dpi/images/LabelSample03_For300dpi_BarcodeLabel1.png" width="258px"> | 48.7mm |
| 4 | Sale 50% Off<br>[Template](LabelSamples/For300dpi/LabelSample04_For300dpi_Sale50PercentOff_Template.tsx) / [Field Data](LabelSamples/For300dpi/LabelSample04_For300dpi_Sale50PercentOff_FieldData.json) | <img src="LabelSamples/For300dpi/images/LabelSample04_For300dpi_Sale50PercentOff.png" width="258px"> | 48.7mm |
| 5 | Barbell Label<br>[Template](LabelSamples/For300dpi/LabelSample05_For300dpi_BarbellLabel_Template.tsx) / [Field Data](LabelSamples/For300dpi/LabelSample05_For300dpi_BarbellLabel_FieldData.json) | <img src="LabelSamples/For300dpi/images/LabelSample05_For300dpi_BarbellLabel.png" width="258px"> | 54mm |

## Receipt Samples
There are some samples of generating receipts using the template printing function.

Please combine ReceiptSampleXX_SampleName_Template.tsx as template and ReceiptSampleXX_SampleName_FieldData.json as field data.

| \# | Sample Name | Printing Result Image | Printable Area       |
|----|-------------|-----------------------|----------------------|
| 1 | Online Order<br>[Template](ReceiptSamples/ReceiptSample01_OnlineOrder_Template.tsx) / [Field Data](ReceiptSamples/ReceiptSample01_OnlineOrder_FieldData.json) | <img src="ReceiptSamples/images/ReceiptSample01_OnlineOrder.png" width="258px"> | 72mm |
| 2 | Retail<br>[Template](ReceiptSamples/ReceiptSample02_Retail_Template.tsx) / [Field Data](ReceiptSamples/ReceiptSample02_Retail_FieldData.json) | <img src="ReceiptSamples/images/ReceiptSample02_Retail.png" width="258px"> | 72mm |
| 3 | Food Delivery1<br>[Template](ReceiptSamples/ReceiptSample03_FoodDelivery1_Template.tsx) / [Field Data](ReceiptSamples/ReceiptSample03_FoodDelivery1_FieldData.json) | <img src="ReceiptSamples/images/ReceiptSample03_FoodDelivery1.png" width="258px"> | 72mm |
| 4 | Food Delivery2<br>[Template](ReceiptSamples/ReceiptSample04_FoodDelivery2_Template.tsx) / [Field Data](ReceiptSamples/ReceiptSample04_FoodDelivery2_FieldData.json) | <img src="ReceiptSamples/images/ReceiptSample04_FoodDelivery2.png" width="258px"> | 72mm |
| 5 | Pharmacy Store1<br>[Template](ReceiptSamples/ReceiptSample05_PharmacyStore1_Template.tsx) / [Field Data](ReceiptSamples/ReceiptSample05_PharmacyStore1_FieldData.json) | <img src="ReceiptSamples/images/ReceiptSample05_PharmacyStore1.png" width="258px"> | 72mm |
| 6 | Pharmacy Store2<br>[Template](ReceiptSamples/ReceiptSample06_PharmacyStore2_Template.tsx) / [Field Data](ReceiptSamples/ReceiptSample06_PharmacyStore2_FieldData.json) | <img src="ReceiptSamples/images/ReceiptSample06_PharmacyStore2.png" width="258px"> | 72mm |
| 7 | Lunch1 Template<br>[Template](ReceiptSamples/ReceiptSample07_Lunch1_Template.tsx) / [Field Data](ReceiptSamples/ReceiptSample07_Lunch1_FieldData.json) | <img src="ReceiptSamples/images/ReceiptSample07_Lunch1_Template.png" width="192px"> | 48mm |
| 8 | Lunch2 Template<br>[Template](ReceiptSamples/ReceiptSample08_Lunch2_Template.tsx) / [Field Data](ReceiptSamples/ReceiptSample08_Lunch2_FieldData.json) | <img src="ReceiptSamples/images/ReceiptSample08_Lunch2_Template.png" width="192px"> | 48mm |
| 9 | Order1<br>[Template](ReceiptSamples/ReceiptSample09_Order1_Template.tsx) / [Field Data](ReceiptSamples/ReceiptSample09_Order1_FieldData.json) | <img src="ReceiptSamples/images/ReceiptSample09_Order1.png" width="258px"> | 72mm |
| 10 | Order2<br>[Template](ReceiptSamples/ReceiptSample10_Order2_Template.tsx) / [Field Data](ReceiptSamples/ReceiptSample10_Order2_FieldData.json) | <img src="ReceiptSamples/images/ReceiptSample10_Order2.png" width="258px"> | 72mm |
| 11 | Cafe<br>[Template](ReceiptSamples/ReceiptSample11_Cafe_Template.tsx) / [Field Data](ReceiptSamples/ReceiptSample11_Cafe_FieldData.json) | <img src="ReceiptSamples/images/ReceiptSample11_Cafe.png" width="192px"> | 48mm |
| 12 | Lottery<br>[Template](ReceiptSamples/ReceiptSample12_Lottery_Template.tsx) / [Field Data](ReceiptSamples/ReceiptSample12_Lottery_FieldData.json) | <img src="ReceiptSamples/images/ReceiptSample12_Lottery.png" width="258px"> | 72mm |

## Graphic Samples for iOS/Android

This is a sample generating receipt image from text data.

| \# | Sample Name | Printing Result Image | Printable Area       |
|----|-------------|-----------------------|----------------------|
| 1 | Graphic Receipt<br>[Source Code](GraphicSamples/GraphicSample01_GraphicReceipt.tsx) | <img src="GraphicSamples/images/GraphicSample01_GraphicReceipt.png" width="192px"> | 48mm |
