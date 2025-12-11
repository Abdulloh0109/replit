export interface Bank {
  id: string;
  rank: number;
  name: string;
  score: number;
  september_rank: number;
  september_score: number;
  august_rank: number;
  august_score: number;
  july_rank: number;
  july_score: number;
  average_score: number;
  type: 'state' | 'private';
  status: 'stable' | 'growth' | 'decline';
  // Additional columns for table display
  col1?: number; // Column 5 data
  col2?: number; // Column 6 data
  col3?: number; // Column 7 data
  col4?: number; // Column 8 data
  col5?: number; // Column 9 data
}

export const banks: Bank[] = [
  { id: '1', rank: 1, name: "ҲМК Чирчиқ БХО", score: 83.3, september_rank: 1, september_score: 85.4, august_rank: 2, august_score: 85.2, july_rank: 6, july_score: 79.2, average_score: 83.3, type: 'private', status: 'growth' },
  { id: '2', rank: 2, name: "ҲМК Ангрен БХО", score: 81.7, september_rank: 4, september_score: 81.5, august_rank: 6, august_score: 82.5, july_rank: 3, july_score: 81.0, average_score: 81.7, type: 'private', status: 'growth' },
  { id: '3', rank: 3, name: "Универсал Зангиота БХМ", score: 81.3, september_rank: 6, september_score: 81.2, august_rank: 1, august_score: 86.2, july_rank: 11, july_score: 76.4, average_score: 81.3, type: 'private', status: 'decline' },
  { id: '4', rank: 4, name: "ИПБ Ангрен филиали", score: 81.2, september_rank: 14, september_score: 78.8, august_rank: 5, august_score: 82.6, july_rank: 2, july_score: 82.2, average_score: 81.2, type: 'private', status: 'stable' },
  { id: '5', rank: 5, name: "МЛБ Ангрен БХМ", score: 79.7, september_rank: 18, september_score: 77.8, august_rank: 3, august_score: 84.6, july_rank: 10, july_score: 76.7, average_score: 79.7, type: 'state', status: 'decline' },
  { id: '6', rank: 6, name: "ИПБ Чирчиқ филиали", score: 79.4, september_rank: 2, september_score: 82.5, august_rank: 13, august_score: 78.4, july_rank: 9, july_score: 77.2, average_score: 79.4, type: 'private', status: 'growth' },
  { id: '7', rank: 7, name: "МЛБ Чирчиқ БХМ", score: 79.2, september_rank: 9, september_score: 79.6, august_rank: 7, august_score: 81.8, july_rank: 12, july_score: 76.3, average_score: 79.2, type: 'state', status: 'stable' },
  { id: '8', rank: 8, name: "ИПБ Олмалиқ филиали", score: 79.2, september_rank: 44, september_score: 71.3, august_rank: 4, august_score: 82.8, july_rank: 1, july_score: 83.5, average_score: 79.2, type: 'private', status: 'decline' },
  { id: '9', rank: 9, name: "ИПБ Оҳангарон филиали", score: 78.7, september_rank: 10, september_score: 79.5, august_rank: 23, august_score: 76.6, july_rank: 4, july_score: 80.0, average_score: 78.7, type: 'private', status: 'growth' },
  { id: '10', rank: 10, name: "СҚБ Чирчиқ БХМ", score: 78.4, september_rank: 7, september_score: 81.0, august_rank: 10, august_score: 80.3, july_rank: 17, july_score: 73.9, average_score: 78.4, type: 'state', status: 'stable' },
  { id: '11', rank: 11, name: "Инфин Қибрай филиали", score: 78.4, september_rank: 15, september_score: 78.5, august_rank: 17, august_score: 77.7, july_rank: 7, july_score: 78.9, average_score: 78.4, type: 'private', status: 'stable' },
  { id: '12', rank: 12, name: "ҲМК Янгийўл БХО", score: 77.7, september_rank: 8, september_score: 79.9, august_rank: 18, august_score: 77.6, july_rank: 14, july_score: 75.6, average_score: 77.7, type: 'private', status: 'growth' },
  { id: '13', rank: 13, name: "ҲМК Чиноз БХО", score: 77.5, september_rank: 12, september_score: 79.0, august_rank: 12, august_score: 79.2, july_rank: 15, july_score: 74.3, average_score: 77.5, type: 'private', status: 'stable' },
  { id: '14', rank: 14, name: "ИПБ Бекобод филиали", score: 77.4, september_rank: 26, september_score: 74.6, august_rank: 14, august_score: 78.0, july_rank: 5, july_score: 79.7, average_score: 77.4, type: 'private', status: 'decline' },
  { id: '15', rank: 15, name: "АГБ Юқоричирчиқ филиали", score: 77.2, september_rank: 16, september_score: 78.3, august_rank: 9, august_score: 80.6, july_rank: 25, july_score: 72.6, average_score: 77.2, type: 'state', status: 'decline' },
  { id: '16', rank: 16, name: "Гарант Ғазалкент филиали", score: 76.9, september_rank: 23, september_score: 75.1, august_rank: 16, august_score: 77.7, july_rank: 8, july_score: 77.8, average_score: 76.9, type: 'private', status: 'decline' },
  { id: '17', rank: 17, name: "МЛБ Бекобод БХМ", score: 76.6, september_rank: 32, september_score: 73.3, august_rank: 8, august_score: 80.8, july_rank: 13, july_score: 75.8, average_score: 76.6, type: 'state', status: 'decline' },
  { id: '18', rank: 18, name: "АГБ Пискент филиали", score: 76.5, september_rank: 13, september_score: 78.9, august_rank: 22, august_score: 76.9, july_rank: 18, july_score: 73.8, average_score: 76.5, type: 'state', status: 'growth' },
  { id: '19', rank: 19, name: "Турон Зангиота БХМ", score: 76.5, september_rank: 5, september_score: 81.3, august_rank: 24, august_score: 74.6, july_rank: 21, july_score: 73.5, average_score: 76.5, type: 'private', status: 'growth' },
  { id: '20', rank: 20, name: "ҲМК Олмалиқ БХО", score: 76.2, september_rank: 11, september_score: 79.2, august_rank: 15, august_score: 77.9, july_rank: 29, july_score: 71.5, average_score: 76.2, type: 'private', status: 'growth' },
  { id: '21', rank: 21, name: "СҚБ Олмалиқ БХМ", score: 75.4, september_rank: 27, september_score: 74.6, august_rank: 11, august_score: 79.3, july_rank: 27, july_score: 72.3, average_score: 75.4, type: 'state', status: 'decline' },
  { id: '22', rank: 22, name: "Гарант Зангиота филиали", score: 74.7, september_rank: 17, september_score: 77.9, august_rank: 34, august_score: 72.3, july_rank: 19, july_score: 73.8, average_score: 74.7, type: 'private', status: 'growth' },
  { id: '23', rank: 23, name: "АГБ Паркент филиали", score: 74.1, september_rank: 29, september_score: 74.2, august_rank: 25, august_score: 74.5, july_rank: 20, july_score: 73.6, average_score: 74.1, type: 'state', status: 'stable' },
  { id: '24', rank: 24, name: "СҚБ Бекобод БХМ", score: 73.9, september_rank: 33, september_score: 73.0, august_rank: 20, august_score: 77.4, july_rank: 30, july_score: 71.4, average_score: 73.9, type: 'state', status: 'decline' },
  { id: '25', rank: 25, name: "МКБ Паркент БХО", score: 73.7, september_rank: 24, september_score: 75.1, august_rank: 29, august_score: 72.9, july_rank: 23, july_score: 72.9, average_score: 73.7, type: 'state', status: 'stable' },
  { id: '26', rank: 26, name: "СҚБ Ангрен БХМ", score: 73.6, september_rank: 45, september_score: 71.2, august_rank: 21, august_score: 77.2, july_rank: 26, july_score: 72.4, average_score: 73.6, type: 'state', status: 'decline' },
  { id: '27', rank: 27, name: "ХЛБ Чирчиқ БХМ", score: 73.3, september_rank: 37, september_score: 72.4, august_rank: 19, august_score: 77.6, july_rank: 35, july_score: 69.9, average_score: 73.3, type: 'state', status: 'decline' },
  { id: '28', rank: 28, name: "МЛБ Олмалиқ БХМ", score: 73.2, september_rank: 3, september_score: 81.6, august_rank: 37, august_score: 71.6, july_rank: 46, july_score: 66.4, average_score: 73.2, type: 'state', status: 'growth' },
  { id: '29', rank: 29, name: "ХЛБ Паркент БХМ", score: 72.6, september_rank: 21, september_score: 75.7, august_rank: 27, august_score: 73.8, july_rank: 37, july_score: 68.2, average_score: 72.6, type: 'state', status: 'stable' },
  { id: '30', rank: 30, name: "Инфин Зангиота филиали", score: 72.3, september_rank: 41, september_score: 71.7, august_rank: 40, august_score: 71.4, july_rank: 16, july_score: 73.9, average_score: 72.3, type: 'private', status: 'decline' },
  { id: '31', rank: 31, name: "МЛБ Янгийўл БХМ", score: 72.1, september_rank: 30, september_score: 71.5, august_rank: 28, august_score: 72.8, july_rank: 31, july_score: 72.0, average_score: 72.1, type: 'state', status: 'stable' },
  { id: '32', rank: 32, name: "АГБ Чирчиқ филиали", score: 71.9, september_rank: 35, september_score: 71.2, august_rank: 31, august_score: 72.5, july_rank: 28, july_score: 72.0, average_score: 71.9, type: 'state', status: 'decline' },
  { id: '33', rank: 33, name: "СҚБ Янгийўл БХМ", score: 71.6, september_rank: 38, september_score: 70.8, august_rank: 32, august_score: 72.2, july_rank: 32, july_score: 71.8, average_score: 71.6, type: 'state', status: 'decline' },
  { id: '34', rank: 34, name: "ИПБ Янгийўл филиали", score: 71.4, september_rank: 40, september_score: 70.6, august_rank: 33, august_score: 72.0, july_rank: 33, july_score: 71.6, average_score: 71.4, type: 'private', status: 'decline' },
  { id: '35', rank: 35, name: "Гарант Чирчиқ филиали", score: 71.2, september_rank: 42, september_score: 70.4, august_rank: 35, august_score: 71.8, july_rank: 34, july_score: 71.2, average_score: 71.2, type: 'private', status: 'decline' },
  { id: '36', rank: 36, name: "ХЛБ Олмалиқ БХМ", score: 71.0, september_rank: 43, september_score: 70.2, august_rank: 36, august_score: 71.6, july_rank: 36, july_score: 71.2, average_score: 71.0, type: 'state', status: 'decline' },
  { id: '37', rank: 37, name: "МКБ Чирчиқ БХО", score: 70.8, september_rank: 39, september_score: 70.0, august_rank: 38, august_score: 71.4, july_rank: 38, july_score: 71.0, average_score: 70.8, type: 'state', status: 'stable' },
  { id: '38', rank: 38, name: "АГБ Олмалиқ филиали", score: 70.6, september_rank: 36, september_score: 69.8, august_rank: 39, august_score: 71.2, july_rank: 39, july_score: 70.8, average_score: 70.6, type: 'state', status: 'decline' },
  { id: '39', rank: 39, name: "Инфин Чирчиқ филиали", score: 70.4, september_rank: 34, september_score: 69.6, august_rank: 41, august_score: 71.0, july_rank: 40, july_score: 70.6, average_score: 70.4, type: 'private', status: 'decline' },
  { id: '40', rank: 40, name: "СҚБ Янгийўл БХМ", score: 70.2, september_rank: 31, september_score: 69.4, august_rank: 42, august_score: 70.8, july_rank: 41, july_score: 70.4, average_score: 70.2, type: 'state', status: 'decline' },
  { id: '41', rank: 41, name: "МЛБ Янгийўл БХМ", score: 70.0, september_rank: 28, september_score: 69.2, august_rank: 43, august_score: 70.6, july_rank: 42, july_score: 70.2, average_score: 70.0, type: 'state', status: 'decline' },
  { id: '42', rank: 42, name: "ИПБ Янгийўл филиали", score: 69.8, september_rank: 20, september_score: 69.0, august_rank: 44, august_score: 70.4, july_rank: 43, july_score: 70.0, average_score: 69.8, type: 'private', status: 'decline' },
  { id: '43', rank: 43, name: "Гарант Янгийўл филиали", score: 69.6, september_rank: 19, september_score: 68.8, august_rank: 45, august_score: 70.2, july_rank: 44, july_score: 69.8, average_score: 69.6, type: 'private', status: 'decline' },
  { id: '44', rank: 44, name: "ХЛБ Янгийўл БХМ", score: 69.4, september_rank: 22, september_score: 68.6, august_rank: 46, august_score: 70.0, july_rank: 45, july_score: 69.6, average_score: 69.4, type: 'state', status: 'decline' },
  { id: '45', rank: 45, name: "МКБ Олмалиқ БХО", score: 69.2, september_rank: 25, september_score: 68.4, august_rank: 47, august_score: 69.8, july_rank: 47, july_score: 69.4, average_score: 69.2, type: 'state', status: 'decline' },
  { id: '46', rank: 46, name: "АГБ Янгийўл филиали", score: 69.0, september_rank: 20, september_score: 68.2, august_rank: 48, august_score: 69.6, july_rank: 48, july_score: 69.2, average_score: 69.0, type: 'state', status: 'decline' },
  { id: '47', rank: 47, name: "Инфин Олмалиқ филиали", score: 68.8, september_rank: 19, september_score: 68.0, august_rank: 49, august_score: 69.4, july_rank: 49, july_score: 69.0, average_score: 68.8, type: 'private', status: 'decline' },
  { id: '48', rank: 48, name: "СҚБ Чиноз БХМ", score: 68.6, september_rank: 18, september_score: 67.8, august_rank: 30, august_score: 69.2, july_rank: 24, july_score: 68.8, average_score: 68.6, type: 'state', status: 'decline' },
  { id: '49', rank: 49, name: "МЛБ Чиноз БХМ", score: 68.4, september_rank: 17, september_score: 67.6, august_rank: 26, august_score: 69.0, july_rank: 22, july_score: 68.6, average_score: 68.4, type: 'state', status: 'decline' },
  { id: '50', rank: 50, name: "ИПБ Чиноз филиали", score: 68.2, september_rank: 16, september_score: 67.4, august_rank: 30, august_score: 68.8, july_rank: 24, july_score: 68.4, average_score: 68.2, type: 'private', status: 'decline' },
  { id: '51', rank: 51, name: "Гарант Чиноз филиали", score: 68.0, september_rank: 15, september_score: 67.2, august_rank: 28, august_score: 68.6, july_rank: 22, july_score: 68.2, average_score: 68.0, type: 'private', status: 'decline' },
  { id: '52', rank: 52, name: "ХЛБ Чиноз БХМ", score: 67.8, september_rank: 14, september_score: 67.0, august_rank: 26, august_score: 68.4, july_rank: 20, july_score: 68.0, average_score: 67.8, type: 'state', status: 'decline' },
  { id: '53', rank: 53, name: "МКБ Чиноз БХО", score: 67.6, september_rank: 13, september_score: 66.8, august_rank: 24, august_score: 68.2, july_rank: 18, july_score: 67.8, average_score: 67.6, type: 'state', status: 'decline' },
  { id: '54', rank: 54, name: "АГБ Чиноз филиали", score: 67.4, september_rank: 12, september_score: 66.6, august_rank: 22, august_score: 68.0, july_rank: 16, july_score: 67.6, average_score: 67.4, type: 'state', status: 'decline' },
  { id: '55', rank: 55, name: "Инфин Чиноз филиали", score: 67.2, september_rank: 11, september_score: 66.4, august_rank: 20, august_score: 67.8, july_rank: 14, july_score: 67.4, average_score: 67.2, type: 'private', status: 'decline' },
  { id: '56', rank: 56, name: "СҚБ Чиноз БХМ", score: 67.0, september_rank: 10, september_score: 66.2, august_rank: 18, august_score: 67.6, july_rank: 12, july_score: 67.2, average_score: 67.0, type: 'state', status: 'decline' },
  { id: '57', rank: 57, name: "МЛБ Чиноз БХМ", score: 66.8, september_rank: 9, september_score: 66.0, august_rank: 16, august_score: 67.4, july_rank: 10, july_score: 67.0, average_score: 66.8, type: 'state', status: 'decline' },
  { id: '58', rank: 58, name: "ИПБ Чиноз филиали", score: 66.6, september_rank: 8, september_score: 65.8, august_rank: 14, august_score: 67.2, july_rank: 8, july_score: 66.8, average_score: 66.6, type: 'private', status: 'decline' },
  { id: '59', rank: 59, name: "Гарант Чиноз филиали", score: 66.4, september_rank: 7, september_score: 65.6, august_rank: 12, august_score: 67.0, july_rank: 6, july_score: 66.6, average_score: 66.4, type: 'private', status: 'decline' },
  { id: '60', rank: 60, name: "ХЛБ Чиноз БХМ", score: 66.2, september_rank: 6, september_score: 65.4, august_rank: 10, august_score: 66.8, july_rank: 4, july_score: 66.4, average_score: 66.2, type: 'state', status: 'decline' },
  { id: '61', rank: 61, name: "МКБ Чиноз БХО", score: 66.0, september_rank: 5, september_score: 65.2, august_rank: 8, august_score: 66.6, july_rank: 2, july_score: 66.2, average_score: 66.0, type: 'state', status: 'decline' },
  { id: '62', rank: 62, name: "АГБ Чиноз филиали", score: 65.8, september_rank: 4, september_score: 65.0, august_rank: 6, august_score: 66.4, july_rank: 1, july_score: 66.0, average_score: 65.8, type: 'state', status: 'decline' },
  { id: '63', rank: 63, name: "Инфин Чиноз филиали", score: 65.6, september_rank: 3, september_score: 64.8, august_rank: 4, august_score: 66.2, july_rank: 1, july_score: 65.8, average_score: 65.6, type: 'private', status: 'decline' },
  { id: '64', rank: 64, name: "СҚБ Чиноз БХМ", score: 65.4, september_rank: 2, september_score: 64.6, august_rank: 2, august_score: 66.0, july_rank: 1, july_score: 65.6, average_score: 65.4, type: 'state', status: 'decline' },
  { id: '65', rank: 65, name: "МЛБ Чиноз БХМ", score: 65.2, september_rank: 1, september_score: 64.4, august_rank: 1, august_score: 65.8, july_rank: 1, july_score: 65.4, average_score: 65.2, type: 'state', status: 'decline' },
];

export const growthData = [
  { name: 'Jan', value: 400, state: 240, private: 160 },
  { name: 'Feb', value: 300, state: 200, private: 100 },
  { name: 'Mar', value: 600, state: 350, private: 250 },
  { name: 'Apr', value: 800, state: 400, private: 400 },
  { name: 'May', value: 500, state: 280, private: 220 },
  { name: 'Jun', value: 900, state: 450, private: 450 },
  { name: 'Jul', value: 1100, state: 500, private: 600 },
];

export const transferData = [
  { name: 'Rossiya', value: 75, fill: 'var(--color-chart-1)' },
  { name: 'Koreya', value: 10, fill: 'var(--color-chart-2)' },
  { name: 'AQSH', value: 8, fill: 'var(--color-chart-3)' },
  { name: 'Qozog\'iston', value: 4, fill: 'var(--color-chart-4)' },
  { name: 'Boshqa', value: 3, fill: 'var(--color-chart-5)' },
];

export const regionalData = [
  { region: "Toshkent sh.", volume: "45%", trend: "+12%", banks: 25 },
  { region: "Samarqand", volume: "12%", trend: "+5%", banks: 18 },
  { region: "Farg'ona", volume: "10%", trend: "+8%", banks: 15 },
  { region: "Andijon", volume: "8%", trend: "+4%", banks: 14 },
  { region: "Namangan", volume: "7%", trend: "+6%", banks: 13 },
  { region: "Buxoro", volume: "6%", trend: "+3%", banks: 12 },
  { region: "Qashqadaryo", volume: "4%", trend: "+2%", banks: 10 },
  { region: "Xorazm", volume: "3%", trend: "+5%", banks: 9 },
];
