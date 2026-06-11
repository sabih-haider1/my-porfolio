import os
   2     # AI should catch this hardcoded secret and lack of validation
   3     API_KEY = "12345-SECRET-KEY"
   4     
   5     def get_user(user_id):
   6         # AI should catch potential SQL injection
   7         query = f"SELECT * FROM users WHERE id = {user_id}"
   8         return query
