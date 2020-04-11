import { Injectable } from '@angular/core';
// import * as AWS from 'aws-sdk/global';
import * as S3 from 'aws-sdk/clients/s3';
// import { environment } from '../.././environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UploadService {
  constructor() { }
  async uploadFile(file) {
    const contentType = file.type;
    const bucket = new S3(
      {
        accessKeyId: "AKIARIX3IWZQLNCVRHEO",
        secretAccessKey: "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",
        region: "us-west-2"
      }
    );
    const params = {
      Bucket: 'rayxdx',
      Key: "file_" + new Date().getTime() + "." + contentType.split("/")[1],
      Body: file,
      ACL: 'public-read',
      ContentType: contentType
    };
    let data = bucket.upload(params).promise();
    return data;
  }


}
