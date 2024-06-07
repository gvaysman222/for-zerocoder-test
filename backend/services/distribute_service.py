def distribute_expenses(data):
    # Пример логики распределения расходов
    distributed_data = []
    for item in data:
        # Распределение на основе площади здания
        building_id = item['building_id']
        amount = item['amount']
        # Дополнительная логика распределения
        distributed_data.append({
            'building_id': building_id,
            'distributed_amount': amount / 2  # Пример распределения
        })
    return distributed_data
