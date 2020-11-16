<MultiplicativeWithParentheseExpression>::="("<MultiplicativeExpression>")"
    |<MultiplicativeWithParentheseExpression>"*"<MultiplicativeExpression>
    |<MultiplicativeWithParentheseExpression>"/"<MultiplicativeExpression>
    |<MultiplicativeWithParentheseExpression>"*""("<MultiplicativeExpression>")"
    |<MultiplicativeWithParentheseExpression>"/""("<MultiplicativeExpression>")"

<AddtiveWithParentheseExpression>::="("<AddtiveExpression>")"
    |<AddtiveWithParentheseExpression>"+"<AddtiveExpression>
    |<AddtiveWithParentheseExpression>"-"<AddtiveExpression>
    |<AddtiveWithParentheseExpression>"+""("<AddtiveExpression>")"
    |<AddtiveWithParentheseExpression>"-""("<AddtiveExpression>")"