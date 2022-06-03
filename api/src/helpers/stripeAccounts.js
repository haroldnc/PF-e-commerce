const createAccount = async (data, secret_key) => {
   const stripe = require('stripe')(secret_key);
   const { country, email } = data;

   if (!country) throw new Error('"country" is required!');
   if (!email) throw new Error('"email" is required!');

   const account = await stripe.accounts.create({
      type: 'custom',
      country,
      email,
      capabilities: {
         card_payments: { requested: true },
         transfers: { requested: true }
      }
   });

   return account;
}

const getAccountInfo = async (acc_id, secret_key) => {
   const stripe = require('stripe')(secret_key);

   if (!acc_id) throw new Error('Account ID is required!');

   const account = await stripe.accounts.retrieve(acc_id);

   return account;
}

const getBalance = async (acc_id, secret_key) => {
   const stripe = require('stripe')(secret_key);

   if (!acc_id) throw new Error('Account ID is required!');

   const balance = await stripe.balance.retrieve({ stripeAccount: acc_id });

   return balance;
}

/* "updateAccountInfo" está para cambiarla para que se actualicen datos específicos porque hay muchas opciones que nunca serán modificadas */
const updateAccountInfo = async (acc_id, update, secret_key) => {
   const stripe = require('stripe')(secret_key);

   if (!acc_id) throw new Error('Account ID is required!');
   if (!update) throw new Error('Data to update is required!');

   const account = await stripe.accounts.update(acc_id, update);

   return account;
}

const deleteAccount = async (acc_id, secret_key) => {
   const stripe = require('stripe')(secret_key);

   if (!acc_id) throw new Error('Account ID is required!');

   const deleted = await stripe.accounts.del(acc_id);

   return deleted;
}

const reportAccount = async (acc_id, reason, secret_key) => {
   const stripe = require('stripe')(secret_key);

   if (!acc_id) throw new Error('Account ID is required!');
   if (!reason) throw new Error('Reason is required!');

   const account = await stripe.accounts.reject(acc_id, { reason });

   return account;
}

const listAccounts = async (limit=10, secret_key) => {
   const stripe = require('stripe')(secret_key);

   const accounts = await stripe.accounts.list({ limit });

   return accounts;
}

module.exports = {
   createAccount,
   getAccountInfo,
   getBalance,
   updateAccountInfo,
   deleteAccount,
   reportAccount,
   listAccounts
}