import { useState, useEffect } from "react";

import {Form, Input, Label, Button} from './SearchBar.styled';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
export function SearchBar({handleSearchSubmit}) {

    const [input, setInput] = useState("");

    const onChange = e => {
        setInput(e.currentTarget.value.toLowerCase());
    };
    
    const onSubmit = e => {
        e.preventDefault();
        if (input.trim() === '') {
            Notify.failure(`Search request shouldn't be empty`);
            return;
          };
        handleSearchSubmit(input);
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
