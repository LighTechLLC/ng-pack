import {NumberInput} from '@ng-pack/shared/model';

export const fullString = (list: NumberInput[] = [], separator: string = ' '): string => {
    return list.filter(Boolean).join(separator);
};
