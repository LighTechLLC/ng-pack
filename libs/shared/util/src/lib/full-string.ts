import {NumberInput} from '@ng-pack/core/util';

export const fullString = (list: NumberInput[] = [], separator: string = ' '): string => {
    return list.filter(Boolean).join(separator);
};
