import {AlgorithmBase} from '@technote-space/genetic-algorithms-js';
import {IGeneticAlgorithm} from '.';

export abstract class GeneticAlgorithmBase<ObjectType> extends AlgorithmBase implements IGeneticAlgorithm<ObjectType> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any,@typescript-eslint/explicit-module-boundary-types,@typescript-eslint/no-unused-vars
  public async init(context: any): Promise<void> {
    //
  }

  public abstract async getObject(): Promise<ObjectType>;
}
