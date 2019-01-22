import { Component } from '@angular/core';
import { StudentInformation } from 'src/app/shared/model/student-information';
import { InformationService } from './services/information.service';

@Component({
    selector: 'szbd-information',
    templateUrl: './information.component.html',
    styleUrls: ['./information.component.scss'],
    providers: [InformationService]
})
export class InformationComponent {
    information: StudentInformation;

    constructor(private informationService: InformationService) {
        this.init();
    }

    private init(): void {
        this.informationService
            .getInformationsObs()
            .subscribe((val: StudentInformation) => {
                this.information = val;
            });
    }
    getStudyTypeInformation(val: string): string {
        if (val === 'FIRST_DEGREE') {
            return 'pierwszego stopnia';
        } else if (val === 'SECOND_DEGREE') {
            return 'drugiego stopnia';
        } else if (val === 'PHD') {
            return 'doktoranckie';
        } else {
            return 'podyplomowe'
        }
    }
}
