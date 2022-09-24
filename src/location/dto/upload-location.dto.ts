import { PartialType } from '@nestjs/mapped-types';
import { CreateLocationtDto  } from './create-location.dto';

export class UpdateLocationDto extends PartialType(CreateLocationtDto ) {}