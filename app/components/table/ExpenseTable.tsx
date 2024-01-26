import React from "react";
import {Table, Box} from "@radix-ui/themes";
import * as ScrollArea from "@radix-ui/react-scroll-area";
import {Expense} from "../../types";
import Loading from "../loading/loading";
import styles from "./ExpenseTable.module.scss"
import moment from "moment";

const ExpenseTable: React.FC<{
  data: Expense[];
  loading: boolean;
}> = ({data, loading}) => {
  if (!data) return;

  if (loading) return <Loading />;
  return (
    <ScrollArea.Root className={styles.scrollarea}>
      <ScrollArea.Viewport className="w-full h-full rounded">
        <Table.Root>
          <Table.Header className={styles.header}>
            <Table.Row>
              <Table.Cell className="text-theme-color-secondary font-semibold">Platform</Table.Cell>
              <Table.Cell className="text-theme-color-secondary font-semibold">Category</Table.Cell>
              <Table.Cell className="text-theme-color-secondary font-semibold">Amount</Table.Cell>
              <Table.Cell className="text-theme-color-secondary font-semibold">Date</Table.Cell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {data.map((expense, index) => (
              <Table.Row key={expense?.id}>
                <Table.Cell>{expense?.platform}</Table.Cell>
                <Table.Cell>{expense?.category}</Table.Cell>
                <Table.Cell>
                  {expense?.amount} {expense?.currency}
                </Table.Cell>
                <Table.Cell>{moment(expense?.date).format("DD-MM-yyyy HH:mm:ss")}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar orientation="vertical" className={styles.scrollbar}>
        <ScrollArea.Thumb className={styles.thumb}/>
      </ScrollArea.Scrollbar>
    </ScrollArea.Root>
  );
};

export default ExpenseTable;
