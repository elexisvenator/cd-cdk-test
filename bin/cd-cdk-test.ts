#!/usr/bin/env node
import 'source-map-support/register';
import cdk = require('@aws-cdk/core');
import { CdCdkTestStack } from '../lib/cd-cdk-test-stack';

const app = new cdk.App();
new CdCdkTestStack(app, 'CdCdkTestStack');
