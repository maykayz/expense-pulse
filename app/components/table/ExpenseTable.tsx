import React from "react";
import {Table} from "@radix-ui/themes"

interface ExpenseProps {
    id: string
    platform: string
    category: string
    currency: string
    amount: number
    date: string
}

const ExpenseTable = ({
    data
}:{
    data: ExpenseProps[]
}) => {
  return (
    <Table.Root>
      <Table.Header>
        <Table.Row className="border-b-0">
          <Table.ColumnHeaderCell>Platform</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Category</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Amount</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Date</Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {data.map((expense, index) => (
          <Table.Row className="border-b-0" key={expense.id+index}>
            <Table.RowHeaderCell>{expense.platform}</Table.RowHeaderCell>
            <Table.Cell>{expense.category}</Table.Cell>
            <Table.Cell>
              {expense.amount} {expense.currency}
            </Table.Cell>
            <Table.Cell>{expense.date}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
};

export default ExpenseTable;
