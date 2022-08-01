import CupModel from "../models";
import { ICup } from '../schemas';

export default class CupService {
  constructor(private cupModel = new CupModel()) {};

  public async getCups(): Promise<ICup[]> {
    const cups = await this.cupModel.getCups();
    return cups;
  };

  public async getCupToYear(year: number): Promise<ICup[] | undefined> {
    const cups = await this.cupModel.getCupToYear(year);
    return cups;
  }

  public async getRunnerUp(runnerUp: string): Promise<ICup[] | undefined> {
    const cups = await this.cupModel.getRunnerUp(runnerUp);
    return cups;
  }

  public async create(values: ICup): Promise<ICup> {
    const cup = await this.cupModel.create(values);
    return cup;
  }

  public async editCup(year: number, values: ICup): Promise<ICup | null> { 
    const cup = await this.cupModel.editCup(year, values);
    return cup;
  }

  public async deleteCup(champion: string): Promise<ICup | null> { 
    const cupDeleted = await this.cupModel.deleteCup(champion)
    return cupDeleted;
  }
};

