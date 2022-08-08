def well(x):
    goods = [plan_good for plan_good in x if plan_good == "good"]
    if len(goods) == 0:
        return "Fail!"
    elif len(goods) <= 2:
        return "Publish!"
    elif len(goods) > 2:
        return "I smell a series!"


print(well(['bad', 'bad', 'bad', 'bad', 'bad']))
