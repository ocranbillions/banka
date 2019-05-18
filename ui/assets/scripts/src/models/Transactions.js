/* eslint-disable no-else-return */
/* eslint-disable no-undef */
const baseUrl = 'https://my-banka.herokuapp.com/api/v1';

export default class Transactions {
  constructor(accountNumber, token) {
    this.accountNumber = accountNumber;
    this.token = token;
  }

  async fetchAccountTrasactions() {
    try {
      const res = await fetch(`${baseUrl}/accounts/${this.accountNumber}/transactions`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      });

      const result = res.json();
      return result;
    } catch (error) {
      return error;
    }
  }

  async credit(amount) {
    try {
      const res = await fetch(`${baseUrl}/transactions/${this.accountNumber}/credit/`, {
        // const res = await fetch('https://my-banka.herokuapp.com/api/v1/transactions/4194194410/credit/', {
        method: 'POST',
        body: JSON.stringify(amount),
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.token}`,
        },
      });

      const result = res.text();
      return result;
    } catch (error) {
      return error;
    }
  }
}
