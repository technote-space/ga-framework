import type { IAlgorithm } from '@technote-space/genetic-algorithms-js';

export interface IGeneticAlgorithm<ObjectType> extends IAlgorithm {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  init(context: any): Promise<void>;

  getObject(): Promise<ObjectType>;
}
