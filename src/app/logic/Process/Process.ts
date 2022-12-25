import type { IGeneticAlgorithm } from '../Algorithm';
import { ProcessBase } from '@technote-space/worker-controller';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
global['Process'] = class Process extends ProcessBase<any> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private algorithm: IGeneticAlgorithm<any>;
  private readonly _sleep?: number;
  private readonly _minimumStep?: number;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public constructor(private callback: () => Promise<void>, context: any) {
    super();

    importScripts(context['path'] ?? 'algorithm.js');
    this.algorithm = new global[context['className'] ?? 'GeneticAlgorithm'](callback, context['data'] ?? undefined);
    if ('sleep' in context && context['sleep'] !== undefined && context['sleep'] !== null) {
      this._sleep = Number(context['sleep']);
    }
    if ('minimumStep' in context && context['minimumStep'] !== undefined && context['minimumStep'] !== null) {
      this._minimumStep = Number(context['minimumStep']);
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public async init(context: any): Promise<void> {
    await this.algorithm.init(context['data'] ?? undefined);
  }

  public get isFinished(): boolean {
    return this.algorithm.hasReached;
  }

  public get sleep(): number {
    if (this._sleep !== undefined) {
      return this._sleep;
    }

    return super.sleep;
  }

  public get minimumStep(): number {
    if (this._minimumStep !== undefined) {
      return this._minimumStep;
    }

    return super.minimumStep;
  }

  public get progress(): number {
    return this.algorithm.progress;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public async reset(context: any): Promise<void> {
    if (context) {
      this.algorithm = new global[context['className'] ?? 'GeneticAlgorithm'](this.callback, context['data'] ?? undefined);
      await this.init(context);
    }

    return this.algorithm.reset();
  }

  public async step(): Promise<void> {
    return this.algorithm.step();
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public getObject(): Promise<any> {
    return this.algorithm.getObject();
  }
};
