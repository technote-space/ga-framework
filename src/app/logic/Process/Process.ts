import {ProcessBase} from '@technote-space/worker-controller';
import {IGeneticAlgorithm} from '../Algorithm';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
global['Process'] = class Process extends ProcessBase<any> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private readonly algorithm: IGeneticAlgorithm<any>;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public constructor(callback: () => Promise<void>, context: any) {
    super();

    importScripts(context['path'] ?? 'algorithm.js');
    this.algorithm = new global[context['className'] ?? 'GeneticAlgorithm'](callback, context['data'] ?? undefined);
    this.algorithm.reset().then();
  }

  public get isFinished(): boolean {
    return this.algorithm.hasReached;
  }

  public get progress(): number {
    return this.algorithm.progress;
  }

  public reset(): Promise<void> {
    return this.algorithm.reset();
  }

  public step(): Promise<void> {
    return this.algorithm.step();
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public getObject(): Promise<any> {
    return this.algorithm.getObject();
  }
};
