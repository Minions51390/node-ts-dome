import { Tsoa } from '../metadataGeneration/tsoa';
import { SwaggerConfig } from './../config';
import { Swagger } from './swagger';
export declare class SpecGenerator {
    private readonly metadata;
    private readonly config;
    constructor(metadata: Tsoa.Metadata, config: SwaggerConfig);
    GetSpec(): Swagger.Spec;
    private buildDefinitions;
    private buildPaths;
    private buildMethod;
    private buildBodyPropParameter;
    private buildParameter;
    private buildProperties;
    private buildAdditionalProperties;
    private buildOperation;
    private getOperationId;
    private getSwaggerType;
    private getSwaggerTypeForPrimitiveType;
    private getSwaggerTypeForArrayType;
    private getSwaggerTypeForEnumType;
    private getSwaggerTypeForReferenceType;
}
