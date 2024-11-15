import { memo } from 'react';

const DropDownListOption = memo(({ value, label, selected, onClickHandler }) => {
    const isSelected = selected === value;
    return (
        <li className={`sort-list-option${isSelected ? ' selected' : ''}`} data-value={`${value}`} onClick={onClickHandler}>
            <span>{label}</span>
        </li>
    );
});

const DropDownList = memo(({ isOpen, listArray, optionClickHandler, selectedOption }) => {
    return (
        <ul className={`sort-list ${isOpen ? 'active' : ''}`}>
            {listArray.map((option) => (
                <DropDownListOption key={option.value} value={option.value} label={option.label} selected={selectedOption} onClickHandler={optionClickHandler} />
            ))}
        </ul>
    );
});

export { DropDownList };