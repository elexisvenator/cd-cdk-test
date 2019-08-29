import cdk = require('@aws-cdk/core');
import s3 = require('@aws-cdk/aws-s3');

export class CdCdkTestStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // the code that defines your stack goes here
    // tslint:disable-next-line:no-unused-expression
    new s3.Bucket(this, 'MyFirstBucket', {
      versioned: true,
      bucketName: `pup-cdk-test-bucket-${this.node.tryGetContext('target')}`,
    });
  }
}
