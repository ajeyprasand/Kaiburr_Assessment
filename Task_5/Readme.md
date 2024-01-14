# Text Classifion on Customer Complaint Dataset
## Dataset_Source: https://catalog.data.gov/dataset/consumer-complaint-database
## Project Pipeline:
  ### 1.Exploratory data analysis
  ### 2.Data cleaning
         -**Consumer complaint narrative** attribute which provide insight on our target attribute **Product** is chosen as feature attribute and others are dropped
         -Dropping Nan Values
         -Removing duplicated
         -Text Preprocessing
           -convert to lower-case letters
           -remove special characters
           -remove trailing X (X was actually replaced to hide sensitive data)
           -remove stopwords
           -Note: The dataset intentionally not balanced.The imbalanced nature of the dataset is a deliberate choice to better simulate the challenges often encountered in practical application
  ### 3.Feature engineering
          -Target attribute is encoded as Credit reporting, credit repair services, or other personal consumer reports':0,
        'Debt collection':1,
        'Consumer Loan':2,
        'Mortgage':3
          -Feature attribute is encoded using TF-IDF vectorizer algorithm
          -Dataset is split into train and testing using `train_test_split()`
  ### 4. Model Building
        - Algorithms chosen for this classification task: 
            1.SVM
            <img width="829" alt="Screenshot 2024-01-14 214037" src="https://github.com/ajeyprasand/Kaiburr_Assessment/assets/35233664/0fc337df-323b-4e52-98c9-b8c4c50e5241">
            2.Naive bayes
            <img width="832" alt="Screenshot 2024-01-14 223259" src="https://github.com/ajeyprasand/Kaiburr_Assessment/assets/35233664/a1606cac-fcb1-4b4b-9d8e-0adaa09d5b1a">
            3.Random forest
            <img width="817" alt="Screenshot 2024-01-14 214100" src="https://github.com/ajeyprasand/Kaiburr_Assessment/assets/35233664/ad0757c7-955f-4793-b187-7f947ee10c0c">
            4.Neural Network
            <img width="819" alt="Screenshot 2024-01-14 214050" src="https://github.com/ajeyprasand/Kaiburr_Assessment/assets/35233664/e76879c0-22b7-40bb-9db1-736621e93b68">
  ### 5.Selection of Model
      -K-Crossfold validation is used as a means to test the performance of model
      -Model with highest F1 score is chosen as final model. F1 score is used since it provides a good insight on models performance by taking both precision and recall into consideration and works well with imbalanced dataset
  ### 6.User Input
  <img width="827" alt="Screenshot 2024-01-14 214139" src="https://github.com/ajeyprasand/Kaiburr_Assessment/assets/35233664/c8eb4b89-9f4d-4479-b3a5-5d732d48f089">

## How to Run?
  1.Clone this repo
  2.Navigate to Text classifier.ipynb which is present is Task_5 directory
  3.Run the ipyn file in anaconda or any ipynb compiler
