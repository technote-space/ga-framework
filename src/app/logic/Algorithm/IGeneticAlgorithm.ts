import {IAlgorithm} from '@technote-space/genetic-algorithms-js';

export interface IGeneticAlgorithm<ObjectType> extends IAlgorithm {
  getObject(): Promise<ObjectType>;
}
