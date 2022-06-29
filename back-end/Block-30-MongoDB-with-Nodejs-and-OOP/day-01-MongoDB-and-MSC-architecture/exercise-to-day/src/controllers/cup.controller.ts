import { Request, Response } from 'express';
import { ICup } from '../schemas';
import CupService from '../services';

export default class CupController {
  constructor(private cupService = new CupService()) {};

  public getCups = async (_req: Request, res: Response): Promise<Response> =>{
    try {
      const cups = await this.cupService.getCups();
      return res.status(200).json(cups);
    } catch (error) {
      return res.status(500).json(error);
    }
  };

  public getCupToYear = async (req: Request, res: Response): Promise<Response> => {
    const { year } = req.params;
    try {
      const cups = await this.cupService.getCupToYear(Number(year)) as ICup[];
      if (cups.length < 1) return res.status(404).json({ message: 'O ano informado não teve copa' });
      return res.status(200).json(cups);
    } catch (error) {
      return res.status(500).json(error);
    }
  };

  public getRunnerUp = async (req: Request, res: Response): Promise<Response> => {
    const { vice } = req.params;
    try {
      const cups = await this.cupService.getRunnerUp(vice) as ICup[];
      if (cups.length < 1) return res.status(404).json({ message: 'O Seleção informado não teve copa' });
      return res.status(200).json(cups);
    } catch (error) {
      return res.status(500).json(error);
    }
  };

  public create = async (req: Request, res: Response): Promise<Response> => {
    try {
      const cups = await this.cupService.create(req.body) as ICup;
      return res.status(200).json(cups);
    } catch (error) {
      return res.status(500).json(error);
    }
  };

  public editCup = async (req: Request, res: Response): Promise<Response> => {
    const { year } = req.params;
    try {
      const cup = await this.cupService.editCup(Number(year), req.body) as ICup;
      if (!cup) return res.status(404).json({ message: "Edição não encontrado!" })
      return res.status(201).json(cup);
    } catch (error) {
      return res.status(500).json(error);
    }
  };

  public deleteCup = async (req: Request, res: Response): Promise<Response> => {
    const { champion } = req.params;
    try {
      const cup = await this.cupService.deleteCup(champion) as ICup;
      if (!cup) return res.status(404).json({ message: "Campeão não encontrado!" })
      return res.status(200).json(cup);
    } catch (error) {
      return res.status(500).json(error);
    }
  };
} 