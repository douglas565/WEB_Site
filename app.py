import openai
import json
import os
from openai import OpenAI
from flask import Flask, request, jsonify
from dotenv import load_dotenv
from flask import render_template
from flask import Flask, render_template, url_for, request, jsonify, send_from_directory

load_dotenv()  # Carrega as variáveis de ambiente do arquivo .env

# Carregue a chave API do arquivo .env
openai.api_key = os.getenv("OPENAI_API_KEY")

app = Flask(__name__, static_folder='static') 

@app.route('/static/<path:filename>')
def serve_static(filename):
    return send_from_directory(app.static_folder, filename)

def get_chatbot_response(system_prompt, user_prompt):
    """
    Envia uma solicitação à API do ChatGPT para obter uma resposta.
    """
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": system_prompt}, 
            {"role": "user", "content": user_prompt}
        ],
        temperature=0.7,
    )
    return response.choices[0].message.content

def chatbot_curriculo(system_prompt, user_prompt): 
    """
    Função principal do chatbot do currículo.
    """
    resposta = get_chatbot_response(system_prompt, user_prompt)
    return resposta

# A rota /chatbot agora está configurada corretamente
@app.route('/chatbot', methods=['POST'])
def chatbot():
    data = request.get_json()
    user_prompt = data.get('prompt')
    user_info = data.get('user_info', {})  

    # Construa o prompt do sistema com base em user_info
    system_prompt = f"Você é um chatbot que responde perguntas sobre um currículo. O currículo é sobre {user_info.get('nome', 'um candidato')}. "
    system_prompt += f"Ele trabalha como {user_info.get('cargo', 'profissional da área')} na {user_info.get('empresa', 'sua empresa')}. "
    system_prompt += f"Ele é graduado em {user_info.get('formacao', 'sua área de formação')} pela {user_info.get('instituicao', 'sua instituição de ensino')}. "

    if user_prompt:
        response = chatbot_curriculo(system_prompt, user_prompt)  
        return jsonify({'response': response})
    else:
        return jsonify({'error': 'Prompt is missing'}), 400

@app.route('/') 
def index():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True, port=5001)
