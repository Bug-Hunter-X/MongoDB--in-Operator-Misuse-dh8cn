# MongoDB $in Operator Misuse
This repository demonstrates a common error when using the `$in` operator in MongoDB queries.  The `$in` operator is used to match documents where a field's value is present in a specified array.  However, incorrect usage can result in unexpected behavior.  The example provided shows both incorrect and correct usages.

## Bug Description
The `$in` operator requires an array of values to check against. Incorrectly using it may lead to the query not matching any documents, or matching only a subset of expected documents.