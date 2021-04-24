// Require Package
const postmanToOpenApi = require('postman-to-openapi')

// Postman Collection Path
const postmanCollection = './postman-sample-collection.json'
// Output OpenAPI Path
const outputFile = './collection.yml'

// // Async/await
// try {
//     const result = postmanToOpenApi(postmanCollection, outputFile, { defaultTag: 'General' })
//     // Without save the result in a file
//     // const result2 = await postmanToOpenApi(postmanCollection, null, { defaultTag: 'General' })
//     console.log(`OpenAPI specs: ${result}`)
// } catch (err) {
//     console.log(err)
// }

// Promise callback style
postmanToOpenApi(postmanCollection, outputFile, { defaultTag: 'General' })
    .then(result => {
        console.log(`OpenAPI specs: ${result}`)
    })
    .catch(err => {
        console.log(err)
    })