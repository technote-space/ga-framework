import {AlgorithmBase} from '@technote-space/genetic-algorithms-js';
import {IGeneticAlgorithm} from '.';

export abstract class GeneticAlgorithmBase<ObjectType> extends AlgorithmBase implements IGeneticAlgorithm<ObjectType> {
  public abstract async getObject(): Promise<ObjectType>;
}
