# MLJump - Machine Learning Model Marketplace

MLJump is a platform that makes machine learning accessible to everyone. Create, customize, and deploy ML models with ease, no advanced programming knowledge required.

## Features

- CSV file upload support
- Multiple model types (Regression, Classification, Clustering)
- Plexe.ai adaptive model option
- Guided model creation process
- Feature selection and target variable specification
- Automatic model generation and evaluation
- Export to Jupyter notebook
- API integration support

## Tech Stack

- Frontend: Next.js + Tailwind CSS
- Backend: Express.js + TypeScript
- Database: MongoDB
- ML: Python (scikit-learn)

## Setup

### Prerequisites

- Node.js (v14 or higher)
- Python 3.8 or higher
- MongoDB

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

### Backend Setup

```bash
cd backend
npm install
pip install -r requirements.txt
npm run dev
```

### Environment Variables

Create a `.env` file in the backend directory:

```
PORT=3001
MONGODB_URI=mongodb://localhost:27017/mljump
```

## Usage

1. Upload your CSV dataset
2. Select the model type
3. Choose features and target variables
4. Generate and evaluate the model
5. Export to notebook or API

## License

MIT
