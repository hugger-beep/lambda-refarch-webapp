// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "5n6a3j4tu4nmaiohfmgq2t6nfo",     // CognitoClientID
  "api_base_url": "https://djzz2q2ihe.execute-api.us-east-1.amazonaws.com/prod",                                     // TodoFunctionApi
  "cognito_hosted_domain": "mytodoappdemo-isc2-amplify-backend.auth.us-east-1.amazoncognito.com", // CognitoDomainName
  "redirect_url": "https://master.d11tvay08it3tq.amplifyapp.com"      // AmplifyURL
};

export default config;
