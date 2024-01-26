"use client";
import React from "react";
import {Box, Flex, Text, Button, TextField, Select} from "@radix-ui/themes";
import {useForm, SubmitHandler, Controller} from "react-hook-form";
import {Expense} from "../types";
import {expenseAPI} from "../services";
import styles from "./AddExpense.module.scss";
// import { DayPicker } from 'react-day-picker';
// import 'react-day-picker/dist/style.css';

const AddExpense: React.FC<{refreshList: () => void}> = ({refreshList}) => {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: {errors, isSubmitted, isValid, isLoading},
  } = useForm<Expense>();

  const onSubmit: SubmitHandler<Expense> = async (data) => {
    if (!isValid) return;

    const result = await expenseAPI.createExpense({
      ...data,
      amount: Number(data.amount),
      date: new Date().toISOString(),
    });
    if (result) {
      reset();
      refreshList();
    }
  };

  return (
    <Box className={`bg-white rounded-xl px-8 py-9 border-slate-300 border `} my="3">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex direction="column">
          <Flex direction="row" justify="between">
            <Flex direction="column">
              <Text size="6" weight="bold" className="text-black">
                Add Expense
              </Text>
            </Flex>
          </Flex>
          <Box className="mb-4" mt="4">
            <Text size="2" className="text-black pb-1">
              Platform
            </Text>
            <TextField.Root size="3">
              <TextField.Input className={styles.input} {...register("platform", {required: true})} placeholder="Platform" />
            </TextField.Root>
            {isSubmitted && errors.platform && (
              <Text size="1" className="text-red-500">
                Platform is required.
              </Text>
            )}
          </Box>
          <Box className="mb-4">
            <Text size="2" className="text-black pb-1">
              Category
            </Text>
            <TextField.Root size="3">
              <TextField.Input className={styles.input} {...register("category", {required: true, minLength: 1, maxLength: 30})} placeholder="Grocery" />
            </TextField.Root>
            {isSubmitted && errors.category && (
              <Text size="1" className="text-red-500">
                Category is required.
              </Text>
            )}
          </Box>
          <Box className="mb-4">
            <Text size="2" className="text-black pb-1">
              Amount
            </Text>
            <TextField.Root size="3">
              <TextField.Input className={styles.input} {...register("amount", {required: true, min: 1})} placeholder="200" />
            </TextField.Root>
            {isSubmitted && errors.amount && (
              <Text size="1" className="text-red-500">
                Amount is required.
              </Text>
            )}
          </Box>
          <Box className="mb-4 flex flex-col">
            <Text size="2" className="text-black pb-1">
              Currency
            </Text>
            <Controller
              name="currency"
              defaultValue="THB"
              control={control}
              render={({field: {ref, ...field}}) => (
                <Select.Root size="3" {...field}>
                  <Select.Trigger className={styles.select} {...register("currency", {required: true})}></Select.Trigger>
                  <Select.Content className="bg-whtie">
                    <Select.Group>
                      <Select.Label>Select Currency</Select.Label>
                      <Select.Item value="THB">THB</Select.Item>
                      <Select.Item value="USD">USD</Select.Item>
                      <Select.Item value="MMK">MMK</Select.Item>
                    </Select.Group>
                  </Select.Content>
                </Select.Root>
              )}
            />
            {isSubmitted && errors.currency && (
              <Text size="1" className="text-red-500">
                Please select currency.
              </Text>
            )}
          </Box>
          {/* <DayPicker
            mode="single"
            {...register("date", {required: true})}
          /> */}
          <Button mt="4" size="3" type="submit" disabled={!isValid} className={`${styles.button} ${isValid ? styles.valid : styles.invalid}`}>
            Add Expense
          </Button>
        </Flex>
      </form>
    </Box>
  );
};

export default AddExpense;
