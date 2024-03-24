cd backend
echo "Installing backend dependencies..."
npm install
echo "Starting backend server..."
npm start &
cd ../frontend
echo "Installing frontend dependencies..."
npm install
echo "Starting frontend server..."
npm start
echo "Both backend and frontend servers have been started."