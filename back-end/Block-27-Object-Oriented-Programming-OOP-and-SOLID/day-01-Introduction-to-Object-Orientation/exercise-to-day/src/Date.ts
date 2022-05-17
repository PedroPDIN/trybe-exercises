class Data {

  private _day: number;
  private _month: number;
  private _year: number;

  constructor(day: number, month: number, year: number) {
  if (!this.validateDate(day, month, year)) {
      this._day = 1;
      this._month = 1;
      this._year = 1900;
    } else {
      this._day = day;
      this._month = month;
      this._year = year;
  }

/*   isValidDate(d: number, m: number, y: number): boolean {

    const currentTime = new Date();
    const currentYear = currentTime.getFullYear()

    if (d < 1 || d > 31) return false;
    if (m < 1 || m > 12) return false;
    if (y < 1000 || y > currentYear) return false;
    return true
  } */

  validateDate(day: number, month: number, year: number): boolean {
    const dateStr = `${year}-${month}-${day}`;

    if (new Date(dateStr).getDate() !== day) return false;

    return true;
  }
}