import { COLORS } from './colors';
import { getLocalisation } from './localisation';
export const getStatusColor = (status: string) => {

    return status === getLocalisation.wifiStatus.connected ? COLORS.success : COLORS.error;
}