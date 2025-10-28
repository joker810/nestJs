import { Injectable } from '@nestjs/common';
import { CpuService } from 'src/cpu/cpu.service';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class DiskService {
    constructor(private powerService:PowerService
    ){
    }

    getData(){
        console.log('20 wats from power service');
        this.powerService.supplyPower(20);
        return 'data';
        
    }
}
