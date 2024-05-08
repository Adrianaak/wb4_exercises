"use strict";

let supplierCode = "BANN:1996587-XXL";
let parsedParts = parsePartCode(supplierCode);

function parsePartCode(supplierCode) {
    let supplier = supplierCode.substring(0, supplierCode.indexOf(":"));
    let productNumber = supplierCode.substring(supplierCode.indexOf(":") + 1, supplierCode.indexOf("-"));
    let size = supplierCode.substring(supplierCode.indexOf("-") + 1);

    return {
        supplier,
        productNumber,
        size
    };
}

console.log(
    "Supplier code: " + parsedParts.supplier,
    "Product number: " + parsedParts.productNumber,
    "Size: " + parsedParts.size
);

