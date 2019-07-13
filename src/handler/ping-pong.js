const AWS = require('aws-sdk')

const initApiGateway = (domainName, stage) => {
  return new AWS.ApiGatewayManagementApi({
    apiVersion: '2018-11-29',
    endpoint: `${domainName}/${stage}`
  })
}

module.exports.handler = async (event) => {
  const { requestContext: { connectionId, domainName, stage } } = event
  const client = initApiGateway(domainName, stage)
  await client.postToConnection({
    ConnectionId: connectionId,
    Data: 'pong'
  }).promise()
  return {}
}
