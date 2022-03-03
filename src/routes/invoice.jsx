import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { getInvoice, deleteInvoice } from '../data';

export default function Invoice() {
  let params = useParams();
  let location = useLocation();
  let navigate = useNavigate();
  let invoice = getInvoice(parseInt(params.invoiceId, 10));

  console.log(invoice);

  return (
    <main style={{ padding: '1rem' }}>
      <h1>Total Due: {invoice.amount}</h1>
      <p>
        {invoice.name}: {invoice.number}
      </p>
      <p>Due Date: {invoice.due}</p>
      <p>
        <button
          onClick={() => {
            deleteInvoice(invoice.number);
            navigate('/invoices' + location.search);
          }}
        >
          Delete
        </button>
      </p>
    </main>
  );
}
