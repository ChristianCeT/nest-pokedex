import {
  ArgumentMetadata,
  Injectable,
  PipeTransform,
  BadRequestException,
} from '@nestjs/common';
import { isValidObjectId } from 'mongoose';

//nest g pi common/pipes/parseMongoId --no-spec
@Injectable()
export class ParseMongoIdPipe implements PipeTransform {
  transform(value: string, metadata: ArgumentMetadata) {
    /* console.log({ value, metadata }); */

    if (!isValidObjectId(value)) {
      throw new BadRequestException(`${value} is not a valid MongoID`);
    }

    return value;
  }
}
