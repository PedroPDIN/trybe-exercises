import { model as createModel } from 'mongoose';
import { ICup, cupSchema } from '../schemas';

export default class CupModel {
  constructor(private cupModel = createModel<ICup>('tournaments', cupSchema)) {};

  public async getCups(): Promise<ICup[]> {
    const cups = await this.cupModel.find();
    return cups;
  };

  public async getCupToYear(year: number): Promise<ICup[] | undefined> {
    const cups = await this.cupModel.find({ year });
    return cups
  }

  public async getRunnerUp(runnerUp: string): Promise<ICup[] | undefined> {
    const cups = await this.cupModel.find({ runnerUp });
    return cups;
  }

  public async create(values: ICup): Promise<ICup> {
    const cup = await this.cupModel.create(values);
    return cup;
  }

  public async editCup(year: number, values: ICup): Promise<ICup | null> { 
    const cup = await this.cupModel.findOneAndUpdate({ year }, { ...values }, { new: true });
    return cup;
  }

  public async deleteCup(champion: string): Promise<ICup | null> { 
    const cupDeleted = await this.cupModel.findOneAndDelete({ champions: champion });
    return cupDeleted;
  }
};
