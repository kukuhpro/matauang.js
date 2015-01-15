# matauang.js

This is a Jquery Plugin that change number to currency.

Feature List Options : 

Name  | Description
------------- | -------------
symbol  | Symbol Of your country currency. ( default : 'Rp.')
delimiter  | Separator when it split. ( default : '.')
endpoint | End of the text. ( default : ',-' )
trigger | Trigger event when this plugin is used. ( default : 'keyup' )
output | where the output will display

And here's some code!

```javascript
<script src="matauang.js"></script>
<script type="text/javascript">
  $('#parent1').matauang({
    symbol : 'Rp.',
    delimiter : '.',
    endpoint : ',-',
    trigger : 'change',
    output : $('#output')
  });
</script>
```
