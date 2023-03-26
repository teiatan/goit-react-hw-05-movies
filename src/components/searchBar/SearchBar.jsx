import { useState } from "react";
import { useSearchParams } from "react-router-dom";


import {Form, Input, Label, Button} from './SearchBar.styled';
export function SearchBar({handleSearchSubmit}) {

    const [input, setInput] = useState("");
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('query') || "";

    const updateQueryString = (query) => {
        const nextParams = query !== "" ? { query } : {};
        setSearchParams(nextParams);
      };

    const onChange = e => {
        setInput(e.currentTarget.value.toLowerCase());
    };
    
    const onSubmit = e => {
        e.preventDefault();
        handleSearchSubmit(input);
        updateQueryString(input);
    }

    return (
        <>
            <Form onSubmit={onSubmit}>
                    <Button type="submit">🔍
                        <Label>Search</Label>
                    </Button>
                
                    <Input
                        type="text"
                        autocomplete="off"
                        autoFocus
                        placeholder="Search movies"
                        value={input}
                        onChange={onChange}
                    />
            </Form>
        </>
    );
};
