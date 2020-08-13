  
const gdocs = require('./getGDocs')
const aws = require('./awsUpload')

const run = async () => {

  await aws.awsAuth()

  gdocs.getGPaths()
    .then(data => {
      data.forEach(file => gdocs.getGFiles(file))
    })
    .then(console.log('Done!'))
    
}

run()