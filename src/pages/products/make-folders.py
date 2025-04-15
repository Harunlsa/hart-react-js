import os

fileNames = ["babySets","basins","baskets","bowls","buckets","colandersAndPlates","coolers","drums","iceCreamContainers","jerryCans","mugsAndCups","racks","takeAwayContainers","toys"]

kebabCaseNames = ["baby-sets", "basins", "baskets", "bowls", "buckets", "colanders-plates", "coolers", "drums", "ice-cream-containers", "jerry-cans", "mugs-cups", "racks", "take-away-containers", "toys"]
for fileName in fileNames:
    fileName = fileName.capitalize()
    try:
        f = open(f"{fileName}.jsx", "w")
        f.write("import ProductPageLayout from '../../components/ProductPageLayout';\n\n import { products } from '../../data/products';" + f"const {fileName} = () => <ProductPageLayout categoryName='{fileName}' bannerImage='{fileName.lower()}-group.png' products="+"{" + f"products.{fileName.lower()}" + "}" + f"/>;\n\nexport default {fileName}")
        print(f"Page created {fileName}")
    except: FileNotFoundError

