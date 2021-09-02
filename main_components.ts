import container from './Container';
export interface main_components{
    div_left:HTMLElement;
    div_right:HTMLElement;
    div_middle:HTMLElement;
    root:HTMLElement;
    start_time: HTMLInputElement;
    deadline_time:HTMLInputElement;
    date_field:HTMLInputElement;
    text_field:HTMLInputElement;
    button_field:HTMLElement;
    present_array:container[];
    future_array:container[];
    past_array:container[];
}
