import React from 'react';
import {Form, Input, Label} from '../components/styled/SearchItems';

const SearchForm = ({onChange, query, onSearch}) => {
  return (
    <Form onSubmit={onSearch}>
        <Label>Search Product by Name</Label>
        <input type="text" onChange={onChange} value={query} placeholder="Enter product name"  />
        <Input type="submit" value="Search" />
    </Form>
  );
}

export default SearchForm;