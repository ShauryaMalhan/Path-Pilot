import pandas as pd
from flask import Flask, request, jsonify
from flask_cors import CORS 
app = Flask(__name__)
CORS(app) 
# Load the CSV data (replace "data2.csv" with your actual file name)
df = pd.read_csv("data2.csv")

@app.route('/get-risk-level', methods=['POST'])
def get_risk_level():
    try:
        # Retrieve occupation from the frontend request
        occupation = request.form.get('occupation')

        flag = False
        count = -1

        for i in df["Occupation"]:
            count += 1
            if occupation.lower() in i.lower():
                flag = True
                risk_level = df["Job score"][count]
                break

        if flag:
            response = {"status": "success", "risk_level": f"{risk_level}"}
        else:
            response = {"status": "not found", "message": "Occupation not found"}

        return jsonify(response)

    except Exception as e:
        print(f"Error: {str(e)}")
        return jsonify({"status": "error", "message": "Internal Server Error"}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000)
